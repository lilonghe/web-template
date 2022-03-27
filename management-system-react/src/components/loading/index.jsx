import { Spin } from 'antd'
import styles from './index.module.less'

export default function Loading () {
  return <Spin className={styles.loading} />
}
