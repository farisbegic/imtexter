import { MdOutlineMoney, MdLanguage, MdFilePresent, MdDownload, MdSecurity, MdFastForward } from 'react-icons/md';

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
        icon: <MdDownload size={30} color="var(--main-color)" />,
        title: "Download files",
        description: "Our text editor allows you to download the text in the desired format or just copy text to the clipboard and paste it when needed."
    },
    {
        icon: <MdFilePresent size={30} color="var(--main-color)" />,
        title: "Edit files",
        description: "You can edit converted text using our embedded editor in case you want to add/remove some parts of the text before downloading."
    },
    {
        icon: <MdSecurity size={30} color="var(--main-color)" />,
        title: "Secure",
        description: "With us, you are protected and secure. We strive to keep your data safe and secure at all times. We stick to our philosophy of not disclosing or storing your personal information to any third parties."
    },
    {
        icon: <MdFastForward size={30} color="var(--main-color)" />,
        title: "Fast",
        description: "Our image to text converter uses Tesseract OCR, which is an open-source optical character recognition software where millions of people contribute to its speed and efficiency."
    },
]

export default benefits;