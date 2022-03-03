import { MdOutlineMoney, MdLanguage, MdFilePresent } from 'react-icons/md';

const benefits = [
    {
        icon: <MdOutlineMoney size={30} color="var(--main-color)" />,
        title: "Free to use",
        description: "It is completely free to convert image to text. To extract text from your favorite photographs, you don't need to spend a dime. We do not require our users to register. You are free to use text converter and leave whenever you wish."
    },
    {
        icon: <MdLanguage size={30} color="var(--main-color)" />,
        title: "Multiple languages",
        description: "Multiple languages are supported by this image to text converter. It implies that you can use text converter to extract text in more than 80 different languages."
    },
    {
        icon: <MdFilePresent size={30} color="var(--main-color)" />,
        title: "Edit and download file",
        description: "You can edit converted text and download the content in the format you require after you extract text. You may also copy the text to the clipboard and paste it into another document."
    }
]

export default benefits;