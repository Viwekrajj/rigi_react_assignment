import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { usePlaylist } from "../hooks/usePlaylist";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const Playlist = () => {
  const { playlist, setCurrentVideoIndex, setPlaylist } = usePlaylist();

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const updatedItems = reorder(
      playlist,
      result.source.index,
      result.destination.index
    );
    setPlaylist(updatedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            // style={getListStyle(snapshot.isDraggingOver)}
          >
            {playlist.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div
                      className="card mb-3"
                      onClick={() => setCurrentVideoIndex(index)}
                    >
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src={item?.thumb}
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{item?.title}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Playlist;
