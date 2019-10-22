import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    float: left;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    height: 32px;
    margin-left: 18px;
    line-height: 32px;
    padding-right: 10px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-bottom: 10px;
    .topic-img {
        width: 32px;
        margin-right: 10px;
        height: 32px;
        display: block;
        float: left;
    }
`;

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    
    background-size: contain;
`;

export const WritterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    height: 300px;
    line-height: 300px;
    border-radius: 3px;
    text-align: center;
`;

export const WritterItem = styled.div`
    height: 48px;
    width: 280px;
    margin-left: 10px;
    margin-top: 10px;
    overflow: hidden;
    .img {
        display: block;
        float: left;
        width: 48px;
        height: 48px;
        border-radius: 24px;
    }
    .autor {
        width: 100px;
        height: 48px;
        text-align: center;
        display: block;
        float: left;
        color: #969696;
        margin: 0;
        line-height: 48px;
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #a5a5a5;
    border-radius: 20px;
    color: #fff;
    margin: 30px 0;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    width: 60px;
    height: 60px;
    line-height: 60px;
    right: 50px;
    bottom: 50px;
    text-align: center;
    border: 1px solid gray;
    font-size: 14px;
    background: #ccc;
    cursor: pointer;
`;