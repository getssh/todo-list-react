import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';
import TodoLists from './TodosList';
import '../index.css';

const TodoApp = () => {
  return (
    <section className="container">
      <div className="wrapper">
        <Header />
        <TodoLists />
      </div>
    </section>
  );
};
export default TodoApp;
