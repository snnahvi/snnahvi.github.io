function article_1() {
    return {
        date: "Sep 2023",
        title: "Implementing a serious traffic game to improve children’s road awareness skills",
        description:
            "This paper presents a serious game designed to teach children traffic rules through immersive virtual simulations. Two scenarios illustrate seven key street-crossing laws, with learning assessed via pretest, training, and posttest. Results show that the game effectively enhances children’s understanding and safe traffic behavior.",
        keywords: [
            "child road awareness skills",
            "traffic safety",
            "game based learning",
            "traffic game",
            "game engine",
        ],
        image: "Paper_Beheshti.png",
        link: "https://ieeexplore.ieee.org/abstract/document/10335530",
    };
}

function article_2() {
    return {
        date: "Apr 2024",
        title: "Could sex differences affect the correlations between fluid biomarkers and white matter hyperintensities?",
        description:
            "The study found sex-based differences in dementia: females showed stronger links between inflammatory markers and white matter damage, while males showed associations with Aβ42, indicating distinct brain and vascular responses.",
        keywords: [
            "Sex differences",
            "White matter hyperintensities (WMH)",
            "Cerebrovascular reactivity (CVR)",
            "Fluid biomarkers",
            "Alzheimer’s disease and vascular cognitive impairment (AD/VCID)",
        ],
        image: "Paper_uky.png",
        link: "https://alz-journals.onlinelibrary.wiley.com/doi/full/10.1002/alz.092095",
    };
}

// function article_3() {
//     return {
//         date: "Nov 2023",
//         title: "Prefrontal cortex signals value category while basal ganglia represent learned values in value learning",
//         description:
//             "Investigated the neural mechanisms underlying variable value learning in macaque monkeys associating novel objects with high or low rewards. Prefrontal cortex (PFC) rapidly differentiated objects by value, while substantia nigra reticulata (SNr) firing correlated with variability in learned values, suggesting SNr may contribute to the observed diversity in object values.",
//         keywords: [
//             "value learning",
//             "prefrontal cortex",
//             "substantia nigra reticulata",
//             "basal ganglia",
//             "reinforcement learning",
//             "electrophysiology",
//             "recurrent neural networks",
//         ],
//         image: "publications_3.jpg",
//         link: "https://www.biorxiv.org/content/10.1101/2023.11.07.564561v1",
//     };
// }

// const myArticles = [article_3, article_2, article_1];
const myArticles = [article_2, article_1];
export default myArticles;
