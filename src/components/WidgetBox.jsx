const { Box } = require('@mui/material');
const { styled } = require('@mui/system');

const WidgetBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary[400],
    borderRadius: '1rem',
    boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(67, 172, 120, .8)'
}))

export default WidgetBox;