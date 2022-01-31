let quotes=[
    {
        quote:"“The Best Way To Get Started Is To Quit Talking And Begin Doing.”",
        author:" – Walt Disney"
    },
    {
        quote:"“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.”",
        author:"– Winston Churchill"
    },
    {
        quote:"“Don’t Let Yesterday Take Up Too Much Of Today.”",
        author:" – Will Rogers"
    },
    {
        quote:"“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.”",
        author:"– Unknown"
    },
    {
        quote:"“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.”",
        author:"-Vince Lombardi"
    },
    {
        quote:"“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.”",
        author:" – Steve Jobs"
    },
    {
        quote:"“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.”",
        author:"– Rob Siltanen"
    },
    {
        quote:"“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.”",
        author:"– Og Mandino"
    },
    {
        quote:"“Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.”",
        author:" – Johann Wolfgang Von Goethe"
    },
    {
        quote:"“Whether You Think You Can Or Think You Can’t, You’re Right.”",
        author:"-Henry Ford"
    },
    {
        quote:"The fear of the LORD is the beginning of wisdom, and knowledge of the Holy One is understanding.",
        author:"-Proverbs 9:10"
    },
    {
        quote:"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
        author:"-Philippians 4:6-7"
    },
    {
        quote:"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.",
        author:"-Colossians 3:23"
    },
    {
        quote:"'Do you not know? Have you not heard? The LORD is the everlasting God, the Creator of the ends of the earth. He will not grow tired or weary, and His understanding no one can fathom.'",
    
        author:"-Isaiah 40:28"
    },
    {
        quote:"'Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go.'",
        author:"-Joshua 1:9"
    },
    
    {
        quote:"'For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them'",
        author:"-Ephesians 2:10"
    },
    {
        quote:"I can do all things through him who strengthens me",
        author:"-Philippians 4:13"
    },
    {
        quote:"'When spirits grow faint within me, it is you who knows my way'",
        author:"-Psalm 142:3"
    },
    {
        quote:"I've always done whatever I want and always been exactly who I am.",
        author:"-Billie Eilish"
    },
    {
        quote:"There are alway going to be bad things. But you can write it down and make a song out of it",
        author:"-Billie Eilish"
    },
    {
        quote:"Smiling makes me feel weak and not in control and not powerful and small.",
        author:"-Billie Eilish"
    },
    {
        quote:"'Time is kind of an amazing thing because you can do so much with it. I think people underestimate time… I don’t want to just sit on my phone for hours.'",
        author:"-Billie Eilish"
    },
    {
        quote:"“Can you feel the love tonight? You needn’t look too far. Stealing through the night’s uncertainties, love is where they are.”",
        author:" — The Lion King"
    },
    {
        quote:"All at once everything looks different, now that I see you.",
        author:"-RL"
    },
    {
        quote:"'Some people are worth melting for.'",
        author:"— Olaf, Frozen "
    },
    {
        quote:" 'If everybody got somebody by the hand, maybe everyone could learn and understand.'",
        author:"— Sebastian, The Little Mermaid "
    },
    {
        quote:"'No matter how your heart is grieving, if you keep on believing, the dream that you wish will come true.'",
        author:"— Cinderella, Cinderella "
    },
    {
        quote:"You must not let anyone define your limits because of where you come from. Your only limit is your soul.",
        author:"— Gusteau, Ratatouille"
    },
    {
        quote:"Why worry? If you’ve done the very best you can, then worrying won’t make it any better.",
        author:"-Walt Disney"
    },
    {
        quote:"When you believe in a thing, believe in it all the way, implicitly and unquestionable.",
        author:"-Walt Disney"
    },
    {
        quote:"First, think. Second, dream. Third, believe. And finally, dare",
        author:"-Walt Disney"
    },
    {
        quote:"We keep moving forward, opening new doors, and doing new things, because we’re curious and curiosity keeps leading us down new paths.",
        author:"-Walt Disney"
    },
    {
        quote:"All our dreams can come true, if we have the courage to pursue them",
        author:"-Walt Disney"
    },
    {
        quote:"keep going         Your hardest times often lead to the greatest moments of your life. Keep going. Tough situations build strong people in the end",
        author:"― Roy T. Bennett"
    },
    {
        quote:"“Do not fear failure but rather fear not trying.”",
        author:"― Roy T. Bennett"
    },

    {
        quote:"Never stop dreaming,never stop believing, never give up,never stop trying, and never stop learning.",
        author:"― Roy T. Bennett"
    },

    {
        quote:"Don’t let mental blocks control you. Set yourself free. Confront your fear and turn the mental blocks into building blocks.",
        author:"― Dr Roopleen"
    },

    {
        quote:"The world’s greatest achievers have been those who have always stayed focussed on their goals and have been consistent in their efforts.",
        author:"― Dr Roopleen,"
    },
    {
        quote:"'For I Know The Plans I Have For You' Declares the Lord, 'Plans to Prosper You and Not to Harm You, Plans to Give You Hope and a Future.",
        author:"-Jeremiah 29:11"
    },
    {
        quote:"“I used to think my life was a tragedy, but now I realize...it’s a comedy.””",
        author:"-Joker 2019"
    },
  

    
  
]
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
let button=document.querySelector("button");

button.addEventListener("click",()=>{
    let random=Math.floor(Math.random() * quotes.length);
    console.log(random);
    h2.innerText=quotes[random].quote
    h3.innerText=quotes[random].author
   
});