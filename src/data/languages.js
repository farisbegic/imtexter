const languages = [
    {
        code: "afr",
        language: "Afrikaans"
    },
    {
        code: "amh",
        language: "Amharic"
    },
    {
        code: "ara",
        language: "Arabic"
    },
    {
        code: "asm",
        language: "Assamese"
    },
    {
        code: "aze",
        language: "Azerbaijani"
    },
    {
        code: "aze_cyrl",
        language: "Azerbaijani - Cyrillic\t"
    },
    {
        code: "bel",
        language: "Belarusian"
    },
    {
        code: "ben",
        language: "Bengali"
    },
    {
        code: "bod",
        language: "Tibetan"
    },
    {
        code: "bos",
        language: "Bosnian"
    },
    {
        code: "bul",
        language: "Bulgarian"
    },
    {
        code: "cat",
        language: "Catalan"
    },
    {
        code: "ceb",
        language: "Cebuano"
    },
    {
        code: "ces",
        language: "Czech"
    },
    {
        code: "chi_sim",
        language: "Chinese - Simplified"
    },
    {
        code: "chi_tra",
        language: "Chinese - Traditional\t"
    },
    {
        code: "chr",
        language: "Cherokee"
    },
    {
        code: "cym",
        language: "Welsh"
    },
    {
        code: "dan",
        language: "Danish"
    },
    {
        code: "deu",
        language: "German"
    },
    {
        code: "dzo",
        language: "Dzongkha"
    },
    {
        code: "ell",
        language: "Greek"
    },
    {
        code: "eng",
        language: "English"
    },
    {
        code: "epo",
        language: "Esperanto"
    },
    {
        code: "est",
        language: "Estonian"
    },
    {
        code: "eus",
        language: "Basque"
    },
    {
        code: "fas",
        language: "Persian"
    },
    {
        code: "fin",
        language: "Finnish"
    },
    {
        code: "fra",
        language: "French"
    },
    {
        code: "gle",
        language: "Irish"
    },
    {
        code: "glg",
        language: "Galician"
    },
    {
        code: "grc",
        language: "Greek, Ancient"
    },
    {
        code: "hin",
        language: "Hindi"
    },
    {
        code: "hrv",
        language: "Croatian"
    },
    {
        code: "hun",
        language: "Hungarian"
    },
    {
        code: "ind",
        language: "Indonesian"
    },
    {
        code: "isl",
        language: "Icelandic"
    },
    {
        code: "ita",
        language: "Italian"
    },
    {
        code: "jpn",
        language: "Japanese"
    },
    {
        code: "kan",
        language: "Kannada"
    },
    {
        code: "kat",
        language: "Georgian"
    },
    {
        code: "kor",
        language: "Korean"
    },
    {
        code: "kur",
        language: "Kurdish"
    },
    {
        code: "lat",
        language: "Latin"
    },
    {
        code: "lav",
        language: "Latvian"
    },
    {
        code: "lit",
        language: "Lithuanian"
    },
    {
        code: "mkd",
        language: "Macedonian"
    },
    {
        code: "mlt",
        language: "Maltese"
    },
    {
        code: "nep",
        language: "Nepali"
    },
    {
        code: "nld",
        language: "Dutch"
    },
    {
        code: "nor",
        language: "Norwegian"
    },
    {
        code: "pol",
        language: "Polish"
    },
    {
        code: "por",
        language: "Portuguese"
    },
    {
        code: "ron",
        language: "Romanian"
    },
    {
        code: "rus",
        language: "Russian"
    },
    {
        code: "slk",
        language: "Slovak"
    },
    {
        code: "slv",
        language: "Slovenian"
    },
    {
        code: "spa",
        language: "Spanish"
    },
    {
        code: "sqi",
        language: "Albanian"
    },
    {
        code: "srp",
        language: "Serbian"
    },
    {
        code: "swa",
        language: "Swahili"
    },
    {
        code: "swe",
        language: "Swedish"
    },
    {
        code: "tha",
        language: "Thai"
    },
    {
        code: "tur",
        language: "Turkish"
    },
    {
        code: "ukr",
        language: "Ukrainian"
    },
    {
        code: "vie",
        language: "Vietnamese"
    }
];

languages.sort((a,b) => {
    if (a.language > b.language) return 1;
    if (a.language < b.language) return -1;
    return 0;
})

export default languages;