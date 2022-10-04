export type BulletsSchema = Array<{
    image: string
    titleBullet: string
    link?: LinkProps
}>

export interface LinkProps {
    url: string
    atributeNoFollow: boolean
    atributeTitle?: string
    openNewTab?: boolean
    newTab?: boolean

}