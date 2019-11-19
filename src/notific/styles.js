import styled from 'styled-components/native'

export const Post = styled.View`
margin-top: 10px
`
export const Header = styled.View`
padding: 5px;
flex-direction: row;
align-items: center;
justifyContent:space-between;
`
export const Avatar = styled.Image`
width: 32px;
height: 32px;
border-radius: 16px;
margin-right: 10px;
`

export const User = styled.Image`
width: 62px;
height: 62px;
border-radius: 16px;
margin-right: 10px;
`
export const Nome = styled.Text`
color: #fff;
font-weight: bold;
margin-top: 20px;
`
export const PostImage = styled.Image`
width: 100%;
`
export const Desc = styled.Text`
padding: 15px;
line-height: 18px;
`