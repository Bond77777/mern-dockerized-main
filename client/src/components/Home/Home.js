import React from 'react'
import styles from './home.module.scss'
import { Card, CardContent, Typography } from '@material-ui/core'
import RegistrationFinish  from '../RegistrationFinish/RegistrationFinish'
import { useSelector } from 'react-redux'

const Home = () => {
  const { user } = useSelector(state => state.user);
  return (
    <div className={ styles.home }>
      { user && !user.active && <RegistrationFinish></RegistrationFinish> }
      <Card className={ styles.card }>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Get started with
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            MERN App hello!
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
export default Home;
