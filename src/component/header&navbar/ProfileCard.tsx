import { Badge, IconButton } from "@material-ui/core"
import {
  AccountCircle,
  Mail as MailIcon,
  Notifications as NotificationsIcon
} from "@material-ui/icons"
import React from "react"

const menuId = "primary-search-account-menu"

const ProfileCard = () => {
  return (
    <>
      <IconButton aria-label='show 4 new mails' color='inherit'>
        <Badge badgeContent={4} color='secondary'>
          <MailIcon />
        </Badge>
      </IconButton>
      <IconButton aria-label='show 17 new notifications' color='inherit'>
        <Badge badgeContent={17} color='secondary'>
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton
        edge='end'
        aria-label='account of current user'
        aria-controls={menuId}
        aria-haspopup='true'
        color='inherit'
      >
        <AccountCircle />
      </IconButton>
    </>
  )
}

export default ProfileCard
