import { useEffect, useState } from 'react';

// / https://nid.naver.com/nidlogin.login?url=https%3A%2F%2Fchzzk.naver.com%2F
const copy = `
((d, e) => {
    ce = (e, f = document) => {
        e = f.createElement(e);
        f.body.appendChild(e);
        return e;
    };
    e = ce('textarea');
    [c, b, v, s] = 'Child body value selct'.split(' ');
    const code = 'JKL SES'
        .split(' ')
        .map(n => d.cookie.match(\`(^|;) ?NID_\${n}=([^;]*)(;|$)\`)?.[2])
        .join('\n');

    if ( code.trim() === '' ) {
        alert('쿠키가 없습니다. 로그인 후 다시 시도해주세요');
        location.href = 'https://nid.naver.com/nidlogin.login?url=https%3A%2F%2Fchzzk.naver.com%2F';
        return;
    }

    const el = ce('button');
    el.id = 'cp';
    el.style =
        'width: 100%; height: 100%; text-align: center; z-index: 9999; font-size: 4em; position: fixed;     background: #333;';
    el.innerText = '쿠키복사(화면클릭) \n 쿠키유출시, 네이버 로그아웃 하신 후\n다시 로그인 해주세요(쿠기 초기화)\n\n\n💢해당 토큰이 유출될 경우💢\n네이버의 모든 엑세스 권한을 넘겨주게 됩니다';
    el.onclick = () => {
        navigator.clipboard
            .writeText(code)
            .then(() => alert('검색 결과가 복사되었습니다.'))
            .catch(e => {
                alert('검색 결과 복사실패했습니다. txt 파일 다운로드로 재시도합니다.');
                e = ce('a');
                e.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(code));
                e.setAttribute('cookie', 'cookie.txt');
                e.click();
            });
        d.body.removeChild(el);
    };
    d[b].prepend(el);
})(document);
`;

// 치봇
export default () => {
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
