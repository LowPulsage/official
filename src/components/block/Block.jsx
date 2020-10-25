import styled from 'styled-components'

export const Block = styled.div`
    display: flex;
    width: ${({w}) => w?w:'auto'}
    height: ${({h}) => h?h:'auto'}
    flex-direction: ${({flexDirection}) => flexDirection?flexDirection:'column'}
    padding: ${({padding}) => padding?padding:'0'}
`