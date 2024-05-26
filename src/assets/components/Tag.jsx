import Button from 'react-bootstrap/Button';

function Tag({tagColor, tagText}) {
  return (
    <div className="d-grid gap-2">
      <Button variant={tagColor} size="lg">
        {tagText}
      </Button>
    </div>
  );
}

export default Tag;