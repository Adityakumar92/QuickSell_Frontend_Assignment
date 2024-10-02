import NoPriorityIcon from '../../public/icons_FEtask/No-priority.svg';
import LowPriorityIcon from '../../public/icons_FEtask/Img - Low Priority.svg';
import MediumPriorityIcon from '../../public/icons_FEtask/Img - Medium Priority.svg';
import HighPriorityIcon from '../../public/icons_FEtask/Img - High Priority.svg';
import UrgentPriorityIcon from '../../public/icons_FEtask/SVG - Urgent Priority colour.svg';

// Add imports for status icons
import BacklogIcon from '../../public/icons_FEtask/Backlog.svg';
import TodoIcon from '../../public/icons_FEtask/To-do.svg';
import InProgressIcon from '../../public/icons_FEtask/in-progress.svg';
import DoneIcon from '../../public/icons_FEtask/Done.svg';
import CanceledIcon from '../../public/icons_FEtask/Cancelled.svg';


export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": return <img src={NoPriorityIcon} alt="No priority" style={{ width: 14, height: 14 }} />;
        case "Low": return <img src={LowPriorityIcon} alt="Low priority" style={{ width: 14, height: 14 }} />;
        case "Medium": return <img src={MediumPriorityIcon} alt="Medium priority" style={{ width: 14, height: 14 }} />;
        case "High": return <img src={HighPriorityIcon} alt="High priority" style={{ width: 14, height: 14 }} />;
        case "Urgent": return <img src={UrgentPriorityIcon} alt="Urgent" style={{ width: 14, height: 14 }} />;
        default: return <img src={UrgentPriorityIcon} alt="Urgent" style={{ width: 14, height: 14 }} />;
    }
}


export const getStatusIcon = (status) => {
    switch (status) {
        case "Backlog": return <img src={BacklogIcon} alt="Backlog" style={{ width: 24, height: 24 }} />;
        case "Todo": return <img src={TodoIcon} alt="Todo" style={{ width: 24, height: 24 }} />;
        case "In progress": return <img src={InProgressIcon} alt="In progress" style={{ width: 16, height: 16 }} />;
        case "Done": return <img src={DoneIcon} alt="Done" style={{ width: 16, height: 16 }} />;
        case "Canceled": return <img src={CanceledIcon} alt="Canceled" style={{ width: 16, height: 16 }} />;
        default: return <img src={CanceledIcon} alt="Canceled" style={{ width: 16, height: 16 }} />;
    }
}