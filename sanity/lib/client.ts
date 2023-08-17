import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skbneazH4YoGibwczzKht9xHbm5pCAGR8SMpYHxDMvdDAV1aprNKh9aLmWphZXBbqWd2TW0WciYnpepfHmpJJZwdTRR7cmZkWUx8oyUfgEIuH63YVg53aMrpK6CrGbnptR8PkRdkLM0zzuDu4X7CdEUjKtZGTKWBNOTb8xS4NVZZkVkvrvTI",
})
