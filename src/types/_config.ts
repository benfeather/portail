export interface Config {
  portals: PortalConfig[]
}

export interface PortalConfig {
  id: number
  name: string
  src: string
}
