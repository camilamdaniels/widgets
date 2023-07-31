const wordList = [
    {
        word: 'arrogate',
        phoneticSpelling: 'ar-ro-gate',
        partOfSpeech: 'transitive verb',
        definition: 'to claim or seize without justification',
        sentence: 'This is a court that boldly arrogates power to itself.'
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
        word: 'exhort',
        phoneticSpelling: 'ex-hort',
        partOfSpeech: 'transitive verb',
        definition: 'to incite by argument or advice: urge strongly',
        sentence: 'He exhorted his people to take back their land.'
    },
    {
        word: 'grandiloquence',
        phoneticSpelling: 'gran-dil-o-quence',
        partOfSpeech: 'noun',
        definition: 'a lofty, extravagantly colorful, pompous, or bombastic style, manner, or quality',
        sentence: 'His most recent high-profile job found him ill at ease in a role that required more gravitas than grandiloquence.'
    },
    {
        word: 'inane',
        phoneticSpelling: 'i-nane',
        partOfSpeech: 'adjective',
        definition: 'lacking significance, meaning, or point: silly, empty, insubstantial',
        sentence: 'The film\'s plot is inane and full of clichés.'
    },
    {
        word: 'maverick',
        phoneticSpelling: 'mav-er-ick',
        partOfSpeech: 'noun',
        definition: 'an independent individual who does not go along with a group or party',
        sentence: 'Let him refind his inner rebel, the famous irreverent maverick.'
    },
    {
        word: 'munificent',
        phoneticSpelling: 'mu-nif-i-cent',
        partOfSpeech: 'adjective',
        definition: 'very liberal in giving or bestowing',
        sentence: 'Ken is a munificent host who has presided over many charitable events at his mansion.'
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
    return wordList[getRandomInt(wordList.length)];
}

