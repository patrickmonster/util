import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// / https://nid.naver.com/nidlogin.login?url=https%3A%2F%2Fchzzk.naver.com%2F
// 치봇

/**
 * 토큰 관리자
 */
export default () => {
    const { token } = useParams();
    const [sessionChannel, setSessionChannel] = useState<string>();

    useEffect(() => {
        const sessionChannel = new BroadcastChannel('Chibot-Session');
        sessionChannel.onmessage = e => {
            console.log('sessionChannel', e.data);
            setSessionChannel(e.data);
        };
        return () => {
            sessionChannel.close();
        };
    }, []);

    return (
        <div>
            <h1>test</h1>
        </div>
    );
};
