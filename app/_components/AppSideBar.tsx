import {
  Card,
  Typography,
  Input,
  List,
  ListItem,
  ListItemPrefix,
} from "./MaterialTailwind";
import {
  MagnifyingGlassIcon,
  DocumentTextIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";

/**
 * AppSideBar component
 * @author Kenneth Sumang
 */
export default function AppSideBar() {
  return (
    <Card className="h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="/next.svg" alt="brand" className="h-8 w-8" />
        <Typography variant="h5" color="blue-gray">
          Tidder
        </Typography>
      </div>
      <div className="p-2">
        <Input
          icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          label="Search"
          crossOrigin=""
        />
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <DocumentTextIcon className="h-5 w-5" />
          </ListItemPrefix>
          r/reddit
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}