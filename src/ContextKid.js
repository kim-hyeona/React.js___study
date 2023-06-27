import ContextContent from './ContextContent';
import ContextFooter from './ContextFooter';
import ContextHeader from './ContextHeader';

function ContextKid() {
    return (
        <div className='page'>
            <ContextHeader />
            <ContextContent />
            <ContextFooter />
        </div>
    );
}

export default ContextKid;