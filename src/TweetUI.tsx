import * as React from 'react';
import './App.css';

// Allow関数
// javascriptを書けない？constなど書けなかった

// const Tweet = (props:any) => (
//     <div className="tweet">
//         <div className="icon-container">{props.icon}</div>
//         <div className="body-container">
//             <div className="status-display">
//                 <span className="display-name">{props.displayName}</span>
//                 <span className="account-name">@{props.accountName}</span>
//             </div>
//             <div className="content">{props.content}</div>
//         </div>
//     </div>
// )

function Tweet(props:any){
    const [liked, setLike] = React.useState(false);
    const toggleLike = React.useCallback(() => setLike((prev) => !prev), [setLike]);
    return(
        <div className="tweet">
            <div className="icon-container">{props.icon}</div>
            <div className="body-container">
                <div className="status-display">
                    <span className="display-name">{props.displayName}</span>
                    <span className="account-name">@{props.accountName}</span>
                </div>
                <div className="content">{props.content}</div>
                <div className="status-action">
                    <span onClick={toggleLike}>{liked ? '♥' : '♡'}</span>
                </div>
            </div>
        </div>
    );
}

function Timeline(props:any){
    const tweetList = props.tweets.map((tw : any) => (
        <Tweet
            key={tw.id}
            icon={tw.icon}
            displayName={tw.displayName}
            accountName={tw.accountName}
            content={tw.content}
        />
    ))
    return <div className="timeline">{tweetList}</div>
}

function TweetInput(props:any){
    // 要素にアクセスするための参照
    // デフォルトはnullにしておく
    // JSX側でrefをセットする
    // 型を指定する
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    const sendTweet = React.useCallback(() => {
        if(textareaRef.current){
            props.addTweet({
                id: new Date().getTime(),
                // tslint:disable-next-line:object-literal-sort-keys
                icon: '',
                displayName: 'new',
                // refの型を指定する事でstrict null checkから逃れられる
                content: textareaRef.current.value
            })
        }
    }, [textareaRef.current, props.addTweet]);

    return(
        <div>
            <div><textarea className="tweet-textarea" ref={textareaRef} > a</textarea></div>
            <div><button onClick={sendTweet} className ="send-tweet">Tweet</button></div>
        </div>
    )
}

export class App extends React.Component{
    private tweets = [
        {
            icon: '',
            id: 0,
            // tslint:disable-next-line:object-literal-sort-keys
            displayName: 'もろこし太郎',
            accountName: 'morokoshi',
            content: '今日も1日もろこしがうまい'
        },
        {
            id: 1,
            // tslint:disable-next-line:object-literal-sort-keys
            icon: '',
            displayName: 'エビデンス',
            accountName: 'evidence',
            content: 'かにみそたべたい'
        }
    ];

    public render(){

        return(
            <div>
                <Timeline tweets={this.tweets}/>
            </div>
        )
    }
}