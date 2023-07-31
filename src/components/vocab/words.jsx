const wordList = [
    {
        word: 'arrogate',
        phoneticSpelling: 'ar-ro-gate',
        partOfSpeech: 'transitive verb',
        definition: 'to claim or seize without justification',
        sentence: 'This is a court that boldly arrogates power to itself.'
    },
    {
        word: 'blandishment',
        phoneticSpelling: 'blan-dish-ment',
        partOfSpeech: 'noun',
        definition: 'something that tends to coax or cajole',
        sentence: 'Impressed by the senator\'s blandishments, the egoistic journalist argues military strategy then faces a moment of conscience.'
    },
    {
        word: 'bilk',
        phoneticSpelling: 'bilk',
        partOfSpeech: 'verb',
        definition: 'to block the free development of: to cheat out of something valuable',
        sentence: 'Arrested in late 2017, she was convicted in 2019 on multiple counts of larceny and theft for bilking banks, hotels and wealthy New Yorkers out of $275,000.'
    },
    {
        word: 'congruity',
        phoneticSpelling: 'con-gru-i-ty',
        partOfSpeech: 'noun',
        definition: 'the quality or state of being congruent or congruous: a point of agreement',
        sentence: 'Women still have to work harder to overcome role-congruity bias.'
    },
    {
        word: 'cupidity',
        phoneticSpelling: 'cu-pid-i-ty',
        partOfSpeech: 'noun',
        definition: 'inordinate desire for wealth',
        sentence: 'Reports of great treasure in the Indies inflamed the cupidity of Columbus\'s crew'
    },
    {
        word: 'ephemeral',
        phoneticSpelling: 'ephem-er-al',
        partOfSpeech: 'adjective',
        definition: 'lasting a very short time',
        sentence: 'But its tender interior brings an acute awareness of life\'s ephemeral nature, the fluctuating tide of joy and sorrow and the inevitability of loss.'
    },
    {
        word: 'exhort',
        phoneticSpelling: 'ex-hort',
        partOfSpeech: 'transitive verb',
        definition: 'to incite by argument or advice: urge strongly',
        sentence: 'He exhorted his people to take back their land.'
    },
    {
        word: 'flagrant',
        phoneticSpelling: 'fla-grant',
        partOfSpeech: 'adjective',
        definition: 'conspicuously offensive',
        sentence: 'In 2016, Green was suspended for a crucial Game 5 loss to LeBron James and the Cavaliers in the NBA Finals after accumulating too many flagrant fouls in the playoffs that season.'
    },
    {
        word: 'grandiloquence',
        phoneticSpelling: 'gran-dil-o-quence',
        partOfSpeech: 'noun',
        definition: 'a lofty, extravagantly colorful, pompous, or bombastic style, manner, or quality especially in language',
        sentence: 'His most recent high-profile job, foreign secretary, found him ill at ease in a role that required more gravitas than grandiloquence.'
    },
    {
        word: 'inane',
        phoneticSpelling: 'i-nane',
        partOfSpeech: 'adjective',
        definition: 'lacking significance, meaning, or point: silly, empty, insubstantial',
        sentence: 'The film\'s plot is inane and full of clichés.'
    },
    {
        word: 'laconic',
        phoneticSpelling: 'la-con-ic',
        partOfSpeech: 'adjective',
        definition: 'using or involving the use of a minimum of words: concise to the point of seeming rude or mysterious',
        sentence: 'Wilson also has a way of making these ego monsters seem harmless and sympathetic, thanks to a singularly laconic, deadpan delivery.'
    },
    {
        word: 'maverick',
        phoneticSpelling: 'mav-er-ick',
        partOfSpeech: 'noun',
        definition: 'an independent individual who does not go along with a group or party',
        sentence: 'Let him refind his inner rebel, the famous irreverent maverick, let the tiger out of the cage.'
    },
    {
        word: 'munificent',
        phoneticSpelling: 'mu-nif-r-cent',
        partOfSpeech: 'adjective',
        definition: 'very liberal in giving or bestowing',
        sentence: 'Ken is a munificent host who has presided over many charitable events at his mansion.'
    },
    {
        word: 'proclivity',
        phoneticSpelling: 'pro-cliv-i-ty',
        partOfSpeech: 'noun',
        definition: 'an inclination or predisposition toward something, especially, a strong inherent inclination toward something objectionable',
        sentence: 'The emails released Monday also underscore the extent to which JPMorgan\'s executives not only knew about Epstein\'s proclivity for young women, but also corresponded and even appeared to joke about it.'
    },
    {
        word: 'subjugate',
        phoneticSpelling: 'sub-ju-gate',
        partOfSpeech: 'transitive verb',
        definition: 'to bring under control and governance as a subject: conquer',
        sentence: 'For decades in 1800s, imperialist Britain and the Dutch vied for supremacy, subjugating the Indigenous tribes.'
    },
    {
        word: 'surreptitious',
        phoneticSpelling: 'sur-rep-ti-tious',
        partOfSpeech: 'adjective',
        definition: 'done, made, or acquired by stealth: clandestine',
        sentence: 'John was a private investigator adept at taking surreptitious pictures of adulterous couples.'
    },
    {
        word: 'trite',
        phoneticSpelling: 'trite',
        partOfSpeech: 'adjective',
        definition: 'hackneyed or boring from much use: not fresh or original',
        sentence: 'The speaker offered disappointingly trite sentiments about embracing each challenge as an opportunity.'
    },
    {
        word: 'ubiquitous',
        phoneticSpelling: 'ubiq-ui-tous',
        partOfSpeech: 'adjective',
        definition: 'existing or being everywhere at the same time: constantly encountered: widespread',
        sentence: 'Hot dogs are the ideal road trip food—inexpensive, portable, ubiquitous.'
    },
    {
        word: 'vociferous',
        phoneticSpelling: 'vo-cif-er-ous',
        partOfSpeech: 'adjective',
        definition: 'marked by or given to vehement insistent outcry',
        sentence: 'The decision was made over their vociferous objections.'
    },
    {
        word: 'zephyr',
        phoneticSpelling: 'zeph-yr',
        partOfSpeech: 'noun',
        definition: 'a gentle breeze',
        sentence: 'A summer zephyr gently stirred her hair.'
    }
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

export const newWord = () => {
    return wordList[getRandomInt(20)];
}

