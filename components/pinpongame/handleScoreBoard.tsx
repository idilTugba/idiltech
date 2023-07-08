import styles from './styles.module.css';
import {Score} from './handleBall';

export default function HandleScoreBoard({playersScore}:{playersScore:Score}){
    return(
        <div className={styles.scoreBoard}>
            <div 
                className={styles.score+ ' float-left'}
                >
                {playersScore.leftPlayer}
            </div>
            <div 
                className={styles.score+ ' float-right'}
                >
                {playersScore.rightPlayer}
            </div>
        </div>
    )
}