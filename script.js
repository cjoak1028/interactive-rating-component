const ratingForm = document.getElementById("rating-form");

ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(ratingForm);
  const rating = formData.get("rating");

  if (!rating) return;

  const thankYouState = document.getElementById("thank-you-state");
  const clientRating = document.getElementById("client-rating");

  ratingForm.classList.add("hidden");
  thankYouState.classList.remove("hidden");
  clientRating.textContent = rating;
});
