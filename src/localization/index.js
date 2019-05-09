import { NativeModules } from 'react-native';
import i18n from 'react-native-i18n';

import { DEFAULT_LANGUAGE } from '../constants/general';

import ru from './dictionaries/ru.json';

export default function configureLocalization() {
  const [deviceLang] = NativeModules.RNI18n.languages[0].split(/[-_]/);

  Object.assign(i18n, {
    defaultLocale: DEFAULT_LANGUAGE,
    fallbacks: true,
    missingTranslation: key => key,
    translations: { ru },
  });

  const supportedLanguages = Object.keys(i18n.translations);
  i18n.locale = supportedLanguages.includes(deviceLang) ? deviceLang : DEFAULT_LANGUAGE;

  return i18n.locale;
}
