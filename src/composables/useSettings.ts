import { ref } from 'vue';

interface GeneralSettings {
  username: string;
  email: string;
  about: string;
  gender: string;
  country: string;
}

const general = ref<GeneralSettings>({
  username: '',
  email: '',
  about: '',
  gender: 'male',
  country: 'USA',
});

interface NotificationsSettings {
  email: boolean;
  sms: boolean;
}

const notifications = ref<NotificationsSettings>({
  email: false,
  sms: false,
});

interface PrivacySettings {
  visibility: Visibility;
  searchEngineIndexing: boolean;
}

type Visibility = 'public' | 'private';

const privacy = ref<PrivacySettings>({
  visibility: 'public',
  searchEngineIndexing: false,
});

export function useSettings() {
  return {
    general,
    notifications,
    privacy,
  };
}
