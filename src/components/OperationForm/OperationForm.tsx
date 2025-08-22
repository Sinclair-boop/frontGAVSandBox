import styles from './OperationForm.module.css';
import { useEffect, useState } from 'react';
import type { ChangeEvent, FormEvent} from 'react';
import { Operation } from "../../models/Operation";
import { AiOutlinePlus } from "react-icons/ai";
import { Tooltip } from 'react-tooltip';
import { OperationErrors, validate } from '../../services/OperationValidator';
import ToastService from '../../services/ToastService';
import Input from '../Input/Input';
import Label from '../Label/Label.tsx';
import { ADD, MANDATORY, OPERATION_TYPE, OPERATION_FROM, OPERATION_FROM_LABEL, OPERATION_TO, OPERATION_TO_LABEL, OPERATION_AMOUNT, OPERATION_AMOUNT_LABEL, QUIZ_TITLE } from '../../constants/Constants';
import SubmitButton from '../Button/SubmitButton';
import HttpClient from '../../services/HttpClient'

type OperationFormProps = {
    id?: string;
    onSubmit: (operation: Operation) => void;   
}

const OperationForm = ({id, onSubmit}: OperationFormProps) => {

    const [operation, setOperation] = useState<Operation>(new Operation());
    const [operationErrors, setOperationErrors] = useState(new OperationErrors());

    useEffect(() => {
        if (!id) return;
        HttpClient.get<Operation>(`/operations/${id}`).then(res => {
            setOperation(res.data);
            setOperationErrors({...operationErrors}); 
        });
    }, []);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setOperation({ ...operation, [name]: value });
        console.log("=====>Operation",operation)
        setOperationErrors({...operationErrors, [name]: value ? '' : MANDATORY});
    };

    // const handleTagsChange = (tags: string[]) => {
    //     setOperation({ ...operation, tags });
    //     setOperationErrors({...operationErrors, tags: tags.length > 0 ? '' : MANDATORY});
    // };

    // const handleQuestionChange = (question: QuizQuestion, index: number) => {
    //     const questions = quiz.questions;
    //     questions.splice(index, 1, question);
    //     setQuiz({...quiz, questions});

    //     const questionsErrors = quizErrors.questions;
    //     questionsErrors.splice(index, 1, new QuizQuestionErrors());
    //     setQuizErrors({...quizErrors, questions: questionsErrors});
    // }

    // const handleQuestionAdd = () => {
    //     setQuiz({...quiz, questions: [new QuizQuestion(), ...quiz.questions]});
    //     setQuizErrors({...quizErrors, questions: [new QuizQuestionErrors(), ...quizErrors.questions]});
    // }

    // const handleQuestionRemove = (index: number) => {
    //     // if (quiz.questions.length === 1) {
    //     //     ToastService.error('Un quiz doit contenir au moins une question');
    //     //     return;
    //     // }

    //     setOperation({...operation});

    //     // const questionsErrors = operationErrors.questions;
    //     // questionsErrors.splice(index, 1);
    //     setOperationErrors({...operationErrors});
    // }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Lorsqu'un formulaire est soumis, le comportement par défaut du navigateur est de recharger la page
        const errors = validate(operation);
        if (errors.isNotEmpty()) {
            setOperationErrors(errors);
            ToastService.error('Quiz Invalid');
            return;
        }
        onSubmit(operation);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input 
                // label={OPERATION_TYPE}
                placeholder={OPERATION_TYPE}
                hiden={true}
                name="type" 
                value={operation.type} 
                error={operationErrors.type}
                onChange={handleInputChange}
            />
            <Input 
                label={OPERATION_FROM_LABEL}
                placeholder={OPERATION_FROM}
                name="from" 
                value={operation.from} 
                error={operationErrors.from} 
                onChange={handleInputChange}
            />
                        
            <Input 
                label={OPERATION_TO_LABEL}
                placeholder={OPERATION_TO}
                name="to" 
                value={operation.to} 
                error={operationErrors.to} 
                onChange={handleInputChange}
            />
             <Input 
                label={OPERATION_AMOUNT_LABEL}
                placeholder={OPERATION_AMOUNT}
                name="amount" 
                value={operation.amount} 
                error={operationErrors.amount} 
                onChange={handleInputChange}
            />
            {/* <QuizTagsInput 
                label={QUIZ_TAGS}
                value={quiz.tags} 
                error={quizErrors.tags} 
                onChange={handleTagsChange} 
            />
            <Input 
                label={QUIZ_THUMBNAIL_URL}
                name="thumbnail" 
                value={operation.thumbnail} 
                error={operationErrors.thumbnail} 
                onChange={handleInputChange} 
            />

            <div className={styles.questionsLabelContainer}>
                <Label>{QUIZ_QUESTIONS}</Label>
                <Tooltip id="add-question" />
                <AiOutlinePlus 
                    data-tooltip-id="add-question" 
                    data-tooltip-content={ADD} 
                    className={styles.addQuestionIcon} 
                    onClick={handleQuestionAdd}
                />
            </div> */}

            <SubmitButton className={styles.submit} />
        </form>
    );
}

export default OperationForm;