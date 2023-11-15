import React from "react";

function article_1() {
    return {
        date: "Apr 2017",
        title: "OBTAIN: Real-Time Beat Tracking in Audio Signals",
        description:
            "A real-time beat tracking system utilizing OSS for onset detection, tempo estimation, and CBSS formation, achieving superior prediction accuracy in simulations compared to other methods, while maintaining computational complexity and performance.",
        keywords: [
            "Onset Strength Signal",
            "Tempo estimation",
            "Beat onset",
            "Cumulative Beat Strength Signal",
            "Peak detection",
        ],
        image: "publications_1.jpg",
        link: "https://arxiv.org/abs/1704.02216",
    };
}

function article_2() {
    return {
        date: "Nov 2021",
        title: "Adversarial orthogonal regression: Two non-linear regressions for causal inference",
        description:
            "Two novel nonlinear regression techniques: AdOR for additive noise models and AdOSE for general structural equation models. These methods, operating as minimax two-player games, ensure regression residuals are independent of regressors without assuming noise distribution, providing effective solutions for various causality learning problems.",
        keywords: [
            "Orthogonal regression",
            "Adversarial models",
            "Additive noise model",
            "Structural equation model",
            "Mutual information",
        ],
        image: "publications_2.jpg",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0893608021002148",
    };
}

function article_3() {
    return {
        date: "Nov 2023",
        title: "Prefrontal cortex signals value category while basal ganglia represent learned values in value learning",
        description:
            "Investigated the neural mechanisms underlying variable value learning in macaque monkeys associating novel objects with high or low rewards. Prefrontal cortex (PFC) rapidly differentiated objects by value, while substantia nigra reticulata (SNr) firing correlated with variability in learned values, suggesting SNr may contribute to the observed diversity in object values.",
        keywords: [
            "value learning",
            "prefrontal cortex",
            "substantia nigra reticulata",
            "basal ganglia",
            "reinforcement learning",
            "electrophysiology",
            "recurrent neural networks",
        ],
        image: "publications_3.jpg",
        link: "https://www.biorxiv.org/content/10.1101/2023.11.07.564561v1",
    };
}

const myArticles = [article_3, article_2, article_1];

export default myArticles;
