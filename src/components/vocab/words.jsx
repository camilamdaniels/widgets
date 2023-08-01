const wordList = [
    {
        word: 'arrogate',
        phoneticSpelling: 'ar-ro-gate',
        partOfSpeech: 'transitive verb',
        definition: 'to claim or seize without justification',
        sentence: 'she arrogated the leadership role to herself'
    },
    {
        word: 'congruity',
        phoneticSpelling: 'con-gru-i-ty',
        partOfSpeech: 'noun',
        definition: 'the quality or state of being congruent or congruous',
        sentence: 'create congruity between your spending and your values'
    },
    {
        word: 'cupidity',
        phoneticSpelling: 'cu-pid-i-ty',
        partOfSpeech: 'noun',
        definition: 'inordinate desire for wealth',
        sentence: 'the cupidity of the bankers'
    },
    {
        word: 'exhort',
        phoneticSpelling: 'ex-hort',
        partOfSpeech: 'transitive verb',
        definition: 'to incite by argument or advice: urge strongly',
        sentence: 'he exhorted his people to take back their land'
    },
    {
        word: 'inane',
        phoneticSpelling: 'i-nane',
        partOfSpeech: 'adjective',
        definition: 'lacking significance, meaning, or point',
        sentence: 'the film\'s plot is inane and full of clichés'
    },
    {
        word: 'munificent',
        phoneticSpelling: 'mu-nif-i-cent',
        partOfSpeech: 'adjective',
        definition: 'very liberal in giving or bestowing',
        sentence: 'a munificent gift'
    },
    {
        word: 'surreptitious',
        phoneticSpelling: 'sur-rep-ti-tious',
        partOfSpeech: 'adjective',
        definition: 'done, made, or acquired by stealth: clandestine',
        sentence: 'a surreptitious glance'
    },
    {
        word: 'trite',
        phoneticSpelling: 'trite',
        partOfSpeech: 'adjective',
        definition: 'hackneyed or boring from much use: not fresh or original',
        sentence: 'that argument has become trite'
    },
    {
        word: 'ubiquitous',
        phoneticSpelling: 'ubiq-ui-tous',
        partOfSpeech: 'adjective',
        definition: 'existing or being everywhere at the same time',
        sentence: 'a ubiquitous fashion trend'
    },
    {
        word: 'vociferous',
        phoneticSpelling: 'vo-cif-er-ous',
        partOfSpeech: 'adjective',
        definition: 'marked by or given to vehement insistent outcry',
        sentence: 'vociferous cries of protest and outrage'
    },
    {
        word: 'zephyr',
        phoneticSpelling: 'zeph-yr',
        partOfSpeech: 'noun',
        definition: 'a gentle breeze',
        sentence: 'a summer zephyr gently stirred her hair'
    }
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

export const newWord = () => {
    return wordList[getRandomInt(wordList.length)];
}

