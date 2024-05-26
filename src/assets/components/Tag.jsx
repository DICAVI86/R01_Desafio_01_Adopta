import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function Tag({tagColor, tagText}) {
  return (
    <Stack direction="horizontal" gap={2}>
      <Badge pill bg={tagColor}>
        {tagText}
      </Badge>
    </Stack>
  );
}

export default Tag;