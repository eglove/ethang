export const localeCurrencyString = {
    'en-US': 'USD',
    'en-CA': 'CAD',
    'fr-CA': 'CAD',
    'en-AU': 'AUD',
    'de-DE': 'EUR',
    'fr-FR': 'EUR',
    'en-IE': 'EUR',
    'nl-NL': 'EUR',
    'en-GB': 'GBP',
    'ja-JP': 'JPY',
    'en-NZ': 'NZD',
    'zh-HK': 'HKD',
    'zh-SG': 'SGD',
    'da-DK': 'DKK'
}

export const formatCurrency = (value: number) => {
    const language = navigator.language;

    const formatter = new Intl.NumberFormat(language, {
        currency: localeCurrencyString[language],
        style: 'currency',
    });

    return formatter.format(value);
}
