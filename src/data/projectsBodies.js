const ProjectBody01 = () => {
    return (
        <div>
            “Is it possible?” This was the first question each person asked me when I explained what we do in our
            startup. At times, I felt very hopeless about the results of our work. However, the main reason we continued
            our struggle was the fact that big companies, like RenTech [insert link] hedge fund and BlackRock [insert
            link] investment management, have utilized the same approaches for this end and are big successful examples.
                <br/>
            In Cardano Trader, we aimed to develop a fully automated system for managing assets in the Tehran Market
            based on AI, especially ML and DL methods. It consists of three main parts: data gathering, AI core, and
            order maker (not to be confused with taker/maker concepts). The data gathering part was a scraper that
            gathered all technical data mainly from two resources—the market's official page and the broker's page. This
            part is responsible for publishing data in memory, and because this procedure should be done with minimum
            delay, the data was written directly to shared memory [insert link]. The AI core was the home for various
            algorithms with different strategies that output, at each time frame, the selection of symbols (where we can
            invest our money in different symbols in the market) and the portion of the whole asset that should be
            spent. We established three giant algorithms for this part, and SpartanX, the fine-tuned version of Spartan,
            was one of them. Finally, the order maker was also a scraper that managed orders made by each algorithm in
            the AI core to be submitted, changed, or canceled on the exchange page.
                <br/>
            In this article, I want to explain SpartanX and the idea behind it. I won’t delve into the other parts and
            algorithms, as they require another article. First, I will discuss how the idea of SpartanX originated by
            providing you with some results of its previous ideas. Then, I will explain it in detail. Finally, I will
            show you the results of that in real-world tests and close the article with the practical issues of that.
                <br/>
            Before Going Deeper
                <br/>
            It is worthwhile to mention that in real-world applications, there are many things you should do rather than
            just loading data and training a model. Consider the following items to be solved in a full data science
            project: gathering and cleaning data, reconstructing missed data, hardware requirements, versioning, and
            checkpointing the models, visualization, and validation, real-time monitoring, testing, and retraining based
            on test results.
                <br/>
            About Tehran Market
                <br/>
            The Tehran Stock Exchange is Iran’s largest stock market. The estimated transaction value of the market is
            about $120M per day. At the time we developed our system, there were about 750 active companies, and their
            shares could be traded as symbols.
                <br/>
            The market has some restrictions and rules that make it difficult for a data scientist to work with it. For
            instance, the market opens at 9 AM and closes at 12 AM, but the opening hours have changed occasionally.
            Furthermore, each day, each symbol must vary between a pre-determined range based on the last price of
            yesterday. This value is different for assorted symbols. In addition, the trade in each symbol should stop
            because of some regulations, and all assets should be blocked. So, for designing a system, these scenarios
            should be considered.
                <br/>
            [insert image]
                <br/>
            Start: Prediction of the Future of Each Symbol
                <br/>
            The first idea is predicting the future price of each symbol; and then, selecting the best symbols based on
            both the future of each symbol and the confidence of this prediction. If we estimate that symbol X’s price
            will raise 5% in 7 days with a confidence of 70%, and symbol Y’s price will raise 3.5% in 7 days with a
            confidence of 80%, we can divide our assets based on our risk threshold into two symbols. There is another
            possibility: keep some part of our asset for a plausible future opportunity. This decision is complicated,
            and we will discuss it later.
                <br/>
            At the start of our startup, we trained various regression models and networks to somehow predict the future
            price of each symbol. We faced many challenges in doing so:
                <br/>
            How many points of future points should be used for the prediction horizon? In other words, which one is our
            goal of prediction? The next minute, next hour, next day, next week, or next month?

            How can we measure the confidence of our prediction?

            What data should be included as features? Should we use other economic measures, like MACD, EMA, and RSI as
            features?

            Should a model be trained for all symbols or a separate model for different symbols?

            The price history is non-stationary. It varies by time and by symbols. How can we overcome this?
                <br/>
            Initially, we aggregated all symbols in all history together to make a big dataset. We calculated different
            features like MACD for each price and included them in our dataset. For the non-stationary problem, we
            considered a moving window of a certain size and used the min-max normalization method to keep the price
            range in a certain range. For the response of the model, we computed the relative price change: the change
            of the future price with respect to the current price.
                <br/>
            Although all symbols are involved, and the size of the dataset was about 200,000 samples, there were
            enormous features, and the model faced the curse of dimensionality problem. So, we first used a Random
            Forest model to find the most informative features. After that, we obtained about 20 features.
                <br/>
            Over more than two months, we trained different models to predict the future price. And the result was
            frustrating: zero. Almost in all cases, the prediction of future price was zero. It means that all models
            say that the price won’t change given the current features. We changed the model and the data, but the model
            remained with zero predictions: we used RNN, LSTM, GRU, 1-dim CNN, Gaussian Process regression, and even
            Transformer. Also, we included different selections of economic measures as features, different
            normalization methods, different time horizons from hours to weeks, and different selections of data related
            to different dates for the market.
                <br/>
            What is the Meaning of Zero?
                <br/>
            We reached two possible explanations for our results. First, it is a bad assumption to consider all market
            data together. Perhaps, symbols’ prices vary in different ways. Symbol X's price will rise if it is in one
            particular condition, while the X price will drop if it is in the same condition. And more complicated, this
            rule for a single symbol varies in time. The same condition responsible for the rise in the price of symbol
            Z two years ago cannot change the price this year because the overall market is in a harsh condition.
                <br/>
            Second, the cause of price change in the time frame we examined is not included in our features. For
            example, if we want to predict the symbol Z price in the next month, we cannot estimate that based on daily
            trade value, the current price, RSI, and so on. Instead, the most responsible cause is included in the net
            sales of the company. This type of data, the fundamental data, is not included in our dataset, and we don’t
            have access to that.
                <br/>
            SpartanX
                <br/>
            So, we wanted to change our viewpoint and apply three major changes. The first change is the time-dependent
            clustering of symbols. The assumption we made was that each symbol price dynamic varies smoothly in time
            (time refers to the day here). On a given day, all 750 symbols are categorized into 10 different clusters
            based on some features extracted based on the fluctuation of the price.
                <br/>
            The second change is we attempted to view the problem as a classification problem instead of a regression
            one. In fact, it is almost impossible to exactly predict the future price. If you ask an expert about a
            symbol, it usually says with examples, “It goes up” or “It will drop.” Nobody is interested in finding out
            the exact price.
                <br/>
            Indeed, we labeled our data at each point as either a positive or negative sample. The meaning of this label
            is that if you buy the share at that time point, you can benefit from that. But there is a problem: At which
            point sell that share? How much benefit do you want to make and sell your share? Do you want to hold the
            share if the price drops, perhaps for a return? If so, at which threshold? So, the good/bad labels are very
            dependent on the trading strategy.
                <br/>
            The third change is that we lower the prediction horizon to one hour. We examined this precisely, and I say
            it with confidence: there is no information in technical data of the market if you want to predict the
            long-term future of a symbol; for example, a month later. The market is under the control of big players,
            and they are humans who make their decisions based on several factors some of which cannot be predicted. But
            in a short time period, the price has a dynamic, as we discovered.
                <br/>
            This is a trade-off between the profit and the prediction ability: you should lower the horizon of the
            future to be able to predict the price, but the profit in the short term is usually too small. Here the idea
            of High-Frequency Trading comes. In this method, we make small but abundant, trades and the overall
            summation of these trades equals to a great profit.
                <br/>
            Therefore, SpartanX is divided into two interconnected sub-systems: the first one is the Signal Generator
            which generates, at every 2.5 seconds, a vector of probabilities with the size of all symbols that each
            entry represents the goodness of buying that symbol at that time (and not the future price value). The
            second one is the Stream Manager which is responsible for managing the whole asset and using them to invest
            in different symbols.
                <br/>
            Signal Generator
                <br/>
            At the start of each day, the Signal Generator first extracts 5 features of the price fluctuations of each
            symbol for the last 30 days. So, the feature of each symbol is a 5x30 matrix. Then, we used UMAP [insert
            link] to reduce these 150 features to just 2 numbers. After that, we used HDBScan [insert link] to
            differentiate all 750 symbols into 10 categories based on their reduced 2 features. This procedure is
            repeated each day. For each day, all symbols are categorized into 10 clusters. It is plausible that symbol X
            today is in cluster number 3, while 10 days ago, it belonged to another cluster, number 6. Then, as each
            UMAP reduction and HDBScan clustering is different from the other days, we used a method named Procrustes
            [insert link] to match these features for consecutive days. So, each category of 10 clusters has some number
            of symbols each day.
                <br/>
            [insert image]
                <br/>
            We were fascinated by these 10 clusters because the categorized symbols are too sensible. For example, the
            symbol Khodro was the closest symbol to Vsapa for most of the days, and these companies are so related to
            each other because they are both giant automobile manufacturers. We didn’t feed this knowledge to our model,
            but based on the price variability, they are recovered as the closest symbols.
                <br/>
            Looking at the price of sample symbols of various clusters reveals a striking pattern for us. In short, what
            we discovered by this approach is that we were able to separate each symbol by its liquidity. If a symbol is
            less liquid, the price jumps. On the other hand, if a symbol is more liquid, it is hard to cause a big
            change in the price because the price is supported by high volumes of buy and sell orders. This separation
            opens up other opportunities for us: we now know that trading in different symbols requires different
            strategies based on the liquidity of that symbol.
                <br/>
            [insert image]
                <br/>
            Then, we trained different models for these clusters because the price dynamic is vaguely different from
            each other. The output of the model, as discussed earlier, is the goodness of buy. This means that if the
            probability is high, you make a bigger profit if you buy shares of that symbol at that time. For labeling
            data, we should first decide our trading strategy. This is so complicated, but at this time just consider
            this simple approach: we buy a share at time t with price p. If one of these criteria reaches, we sell that
            share:
                <br/>
            If the current price falls less than 2% of the maximum price in the time window from time t to now

            If the price falls less than 1% of p

            If the current time passes 1 hour from time t.
                <br/>
            In the dataset, we can traverse over all time points (sampled with a 2.5-second period) for each day and
            apply this criterion. Then, if the sell price is higher than the buy price plus the exchange fee, that time
            point is labeled as good. Vice versa, the remaining points are labeled as bad.
                <br/>
            By training our model this way, we can make sure that if the model accuracy is good, and we follow these
            predictions with the aforementioned trading strategy, we benefit from the market.
                <br/>
            We used a Transformer [insert link] network for this end. The intuition behind that is that this network is
            based on the attention mechanism. Take RNN, for example, this network is not capable of inferring patterns
            that occur with different time scales. If the specific pattern of interest occurs far away from the current
            time, RNN cannot capture it. However, the Transformer makes use of MHA blocks that overcome this issue. For
            our problem, we changed some parts of the Transformer architecture. For instance, embedding was removed, and
            positional encoding was changed.
                <br/>
            [insert image]
                <br/>
            Stream Manager
                <br/>
            Consider an imaginary scenario: we have access to a perfect model that predicts with high confidence, let's
            say 90%, the future of each symbol. So, in this scenario, what is the best approach for investment? One may
            answer that we should buy the share of a symbol with all of our assets the first time. But it is 10%
            possible that it is a bad decision and causes the loss. It is possible that you stay for a better
            opportunity to buy another symbol and make a great benefit. Furthermore, it is more complicated: if we have
            a share of symbol X and it is now in loss, should we sell the shares to free up some assets to buy the share
            of another symbol with a higher probability?
                <br/>
            In my opinion and based on my experience, selecting these strategies is more important than predicting the
            future of the price. This part is related to topics of economics such as risk management and asset
            management.
                <br/>
            We considered a simple useful strategy for that. Initially, our whole asset, let's say 1, is divided into a
            certain number of parts (we called it a stream), let's say N. In each trade, we just use one of these
            streams to buy and sell the shares. At each time point, the machine checks all of these streams. If one of
            them is free, the Stream Manager asks the Signal Generator about good symbols to buy. If the probability of
            a symbol is higher than a threshold and that symbol was not bought before, the stream will be assigned to
            that symbol. The Stream Manager checks all acquired streams at each time and, as before, if one of these
            criteria reaches, the share of that symbol will be sold:
                <br/>
            If the current price falls less than 2% of the maximum price in the time window from time t to now

            If the price falls less than 1% of p

            If the current time passes 1 hour from time t.
                <br/>
            The parameters of this method play a crucial role in the overall benefit. For instance, if the number N is
            increased, the profit will decrease, as the total profit is divided by N; at the same time, the risk will
            decline. Therefore, finding the best set of parameters is too effective and is a challenging problem. We
            found the best set by grid searching in all possible combinations for 3 weeks on 5 powerful machines with a
            Core i9 CPU. The following image shows the result of changing each parameter on the overall profit.
                <br/>
            [insert image]
                <br/>
            Recall the labeling mechanism in the Signal Generator part. It is worthwhile to mention that labels are
            dependent on this parameter set. Also, the best parameter set and the profit depend on the output of the
            Signal Generator. Yet, we should fine-tune these two sub-systems together. But it is not a trivial question,
            and we just fine-tuned Transformer models after finding the best set.
                <br/>
            Results and Discussion
                <br/>
            The whole structure was tested several times. In one test that lasted for about one and a half months with
            an initial asset of $100,000, we gained 15%. In one day, two streams were bought and sold in a symbol just
            in 6 seconds. However, as we found later, this profit is highly due to the circumstances of the market.
            High-frequency trading requires high liquidity as the orders should be done very quickly. In addition, this
            strategy works well in neutral markets, neither in a bullish nor a bearish trend.
                <br/>
            This strategy faced two practical issues in real tests causing a diminish in the real test performance.
            First, in many cases, the buy orders did not complete, that was due to the liquidity. Second, as explained
            earlier, the rule of the Tehran exchange market says that the price should be in a specific range. Because
            of this rule, when the price is in a downward trend, all shareholders want to sell their shares, and no one
            is willing to buy that share. This causes a saturation in the price with a lower bound. This causes some of
            the streams blocked for several days and cannot be used in other symbols to gain a profit. This highly
            affected the performance of our algorithm.
        </div>
    );
};

const ProjectBodies = [ProjectBody01, ProjectBody01, ProjectBody01];
export default ProjectBodies;
