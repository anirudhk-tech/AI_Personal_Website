import { Card, CardContent, Typography } from "@mui/material";


export const ChatBox = ({ msg }) => {
    const card_content = (
        <CardContent>
            <Typography sx={{
                fontFamily: 'PT Sans',
                fontSize: {xs: '80%', sm: '100%'},
                color: msg.chat_type === 'bot' ? 'primary.main' : 'primary.contrastText',
            }}>{msg.content}</Typography>
        </CardContent>
    );

    return (
        <Card 
        variant='outlined'
        sx={{
            borderColor: 'primary.main',
            bgcolor: msg.chat_type === 'bot' ? 'background' : 'primary.main',
            borderWidth: 2,
            maxWidth: '80%',
            width: 'fit-content',
            marginBottom: '2%', // Adds space between chats
            alignSelf: msg.chat_type === 'bot' ? 'flex-start' : 'flex-end',
            alignItems: 'center',
            justifyContent: 'flex-end',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'visible',
        }}    
        >{card_content}</Card>
    );
};