import React from "react";
import LinkIcon from '@/assets/icons/link.svg';
import LinkIconActive from '@/assets/icons/link_green.svg';
import TextIcon from '@/assets/icons/text.svg';
import TextIconActive from '@/assets/icons/text_green.svg';

// 选择二维码内容类型
export const QrCodeOptions = [
  {
    index: 0,
    value: 'Text',
    label: 'Text',
    icon: <TextIcon />,
    iconActive: <TextIconActive />
  },
  {
    index: 1,
    value: 'Link',
    label: 'Link',
    icon: <LinkIcon />,
    iconActive: <LinkIconActive />
  },
  {
    index: 3,
    value: 'Phone',
    label: 'Phone'
  },
  {
    index: 4,
    value: 'Email',
    label: 'Email'
  }
]