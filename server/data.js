const faker = require('faker')

const createResults = (reviewId) => {
  const review_id = reviewId;
  const rating = Math.floor(Math.random() * 5);
  const date = JSON.stringify(faker.date.between('1500-01-01', '2020-01-01'));
  const body = faker.lorem.paragraph();
  const reported = Math.floor(Math.random() * 100);
  const reviewer_name = faker.name.firstName().concat(faker.random.word()).concat(Math.floor(Math.random() * 9999));
  const reviewer_email = reviewer_name.concat('@email.com');
  const response = faker.lorem.paragraph();
  const helpfulness = Math.floor(Math.random() * 5);
  const product_id = Math.floor(Math.random() * 100);
  const recommend = Math.floor(Math.random() * 100);
  const summary = faker.lorem.paragraph();

  const aggragateData = `${review_id},${rating},${date},"${body}",${reported},"${reviewer_name}","${reviewer_email}","${response}",${helpfulness},${product_id},${recommend},"${summary}"\n`

  return aggragateData
}

const createPhoto = (reviewId) => {
  const review_id = reviewId;
  const url = faker.image.imageUrl(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), 'business', true);

  const aggragateData = `${review_id},${url}\n`;
  return aggragateData
}

// const createCharacter = (reviewId) => {
//   const review_id = reviewId;
//   const id = faker.random.number(100);
//   const characteristics = ["Fit", "Length", "Quality", "Comfort", "Width"];

//   const randomCharacter = characteristics[Math.floor(Math.random() * characteristics.length)];

//   const aggragateData = `${id},${review_id},${randomCharacter}`

//  }

// const createCharacterReviews = (reviewId) => {
//   const review_id
// }
////Characteristics
// name text
// review_id

//// Characteristics_review
// Character_id
// review_id
// value

 //createResults();
 // createPhoto();

module.exports = {
  createPhoto,
  createResults,
  // createCharacter,
}