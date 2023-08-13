export const correctAnswerMessage = [
  'Correct',
  'Brilliant!',
  'Well Done!',
  'Fantastic!',
  'Outstanding!',
  'Excellent!',
  'Great Job!',
  'Superb!',
  'Impressive!',
  'Amazing!',
  'Incredible!',
  'Splendid!',
  'Remarkable!',
  'Stunning!',
  'Marvelous!',
  'Exceptional!',
  'Fabulous!',
  'Wonderful!',
  'Magnificent!',
  'Awesome!'
];


export function getRandomAppreciation(): string {
  const index = Math.floor(Math.random() * correctAnswerMessage.length);
  return correctAnswerMessage[index];
}
