import { Box } from '@mui/material'
import { userLayoutMax } from 'style/globals'

const bodyStyle = {
  ...userLayoutMax,
  minHeight: '400px',
  //padding: "20px 0",
  minWidth: '300px',
}

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Box sx={bodyStyle}>{children}</Box>
    </>
  )
}
