"use strict";
class Review {
    constructor(review, name, estrelas) {
        this.review = review,
            this.name = name;
        if (estrelas) {
            this.estrelas = estrelas;
        }
    }
}
const reviewUM = new Review(true, "Davi", 4);
const reviewDois = new Review(false, "Morais");
function UserReview(review, revie) {
    if (revie === "notReview") {
        const notReview = "voce não avaliou o produto";
        console.log(notReview);
        return;
    }
    else if ("estrelas" in review) {
        const reviewUser = `Olá, ${review.name}, voce deu ${review.estrelas} estrelas`;
        console.log(reviewUser);
        const objectReview = {
            review: review.review,
            name: review.name,
            estrelas: review.estrelas
        };
        console.log(objectReview);
    }
}
UserReview(reviewDois, "notReview");
UserReview(reviewUM, 'reviewUser');
