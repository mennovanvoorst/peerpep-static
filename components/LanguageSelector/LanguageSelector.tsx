import { useRouter } from 'next/router';
import { Dropdown } from '../Dropdown';

export type LanguageSelectorProps = {
  locale: Locale;
};

const localeOptions = [
  {
    value: 'en',
    label: 'English'
  },
  {
    value: 'nl',
    label: 'Nederlands'
  }
];

export const LanguageSelector = ({ locale }: LanguageSelectorProps) => {
  const router = useRouter();

  const handleChange = (value: string) => {
    router.push(router.asPath, router.asPath, { locale: value });
  };

  return (
    <Dropdown
      label={
        localeOptions.find((option) => option.value === locale)?.label ||
        'Language'
      }
      options={localeOptions}
      value={locale}
      onChange={handleChange}
    />
  );
};
