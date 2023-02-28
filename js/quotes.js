const quotes = [{
    quote: "I never dreamed about success, I worked for it.",
    author: "Estee Lauder",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great",
    author: "John D. Rockefeller",
  },
  {
    quote: "If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey",
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: "Steve Jobs",
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
];

/* Math의 random() 및 floor() method를 사용해 0~9까지 랜덤한 숫자를 얻는다. round()는 반올림, ceil()은 올림, floor()는 내림.
   0~9는 quotes 배열의 index값을 나타낸다. 그리고 length를 이용해 배열의 길이를 알아낸다.
   Math.random()에 quotes.length를 곱해 Math.floor()안에 넣고 그 값을 quotes[]를 불러오는 index값으로 사용한다.
   마지막으로 명언과 저자를 각 지정한 html 요소에 innerText로 넣어서 표기한다. */

const phrase = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");
const random = quotes[Math.floor( Math.random() * quotes.length )];

phrase.innerText = random.quote;
author.innerHTML = `- <strong>${random.author}</strong> -`;