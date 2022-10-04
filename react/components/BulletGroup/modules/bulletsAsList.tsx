import React from 'react'
import { BulletsSchema } from '../BulletTypes'
import Bullet from '../Bullet'

const getBulletsAsTSXlist = (
    bullets: BulletsSchema
) => (
    bullets.map((bullet: any, index) => {
        console.log("Mi bullet es:", bullet)
        return <Bullet
            key={index}
            src={bullet.image}
            titleBullet={bullet.titleBullet}
            link={
                bullet.link
                    ?
                    bullet.link
                    : {
                        url: "",
                        atributeNoFollow: false,
                        atributeTitle: "",
                        openNewTab: false,
                        newTab: false
                    }
            }
        />
    })
)
export default getBulletsAsTSXlist