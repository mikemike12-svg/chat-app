import type { FC } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import style from './style.module.css'

export type AppIconProps = {
  size?: 'xs' | 'tiny' | 'small' | 'medium' | 'large'
  rounded?: boolean
  background?: string
  className?: string
}

const AppIcon: FC<AppIconProps> = ({
  size = 'medium',
  rounded = false,
  background,
  className,
}) => {
  return (
    <span
      className={classNames(
        style.appIcon,
        size !== 'medium' && style[size],
        rounded && style.rounded,
        className ?? '',
      )}
      style={{
        background,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        src="/chat-bot-faq.png"   // ← public直下のファイルを指定
        alt="Chat Bot Icon"
        width={40}
        height={40}
        style={{ borderRadius: rounded ? '50%' : undefined }} // 角丸指定もできる
      />
    </span>
  )
}

export default AppIcon

