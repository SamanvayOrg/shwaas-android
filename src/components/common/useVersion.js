import { useEffect, useState } from 'react'
import codePush from 'react-native-code-push'

async function getCodepushVersion() {
  try {
    const update = await codePush.getUpdateMetadata();

    return update ? update.label : null
  } catch (error) {
    return null
  }
}

export function useVersion() {
  const [appVersion, setAppVersion] = useState('');

  useEffect(() => {
    getCodepushVersion().then((codepushVersion) => {
      if (codepushVersion) {
        setAppVersion(codepushVersion)
      }
    })
  }, []);

  return { appVersion }
}
