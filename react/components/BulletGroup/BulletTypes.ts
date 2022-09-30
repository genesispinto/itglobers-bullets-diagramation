export type BulletsSchema = Array<{
    image: string
    titleBullet: string
    link: Link
}>

export interface Link {
    url: string
    atributeNoFollow: boolean
    atributeTitle?:string
    openNewTab?: boolean
    newTab?: boolean
    
}