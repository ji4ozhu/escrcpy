import { t } from '@/locales/index.js'

export default {
  label: t('preferences.audio.name'),
  field: 'scrcpy',

  children: () => {
    // "[server] INFO: List of audio encoders:"
    // "--audio-codec=opus --audio-encoder='c2.android.opus.encoder'"
    // "--audio-codec=aac --audio-encoder='c2.android.aac.encoder'"
    // "--audio-codec=aac --audio-encoder='OMX.google.aac.encoder'"
    return [
      {
        label: t('preferences.audio.disable.name'),
        field: '--no-audio',
        type: 'Switch',
        value: false,
        placeholder: t('preferences.audio.disable.placeholder'),
      },
    ]
  },
}