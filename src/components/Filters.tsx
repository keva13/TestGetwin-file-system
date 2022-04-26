import React from 'react';
import { sortField } from '../app.config';
import { sort_direction, FileTypes_sort_field } from '../types/sortTypes';
import './Filters.scss';


const Filters: React.FC<{
    field:FileTypes_sort_field, 
    direction: sort_direction,
    fieldCallback: Function,
    directionCallback: Function}> = ({field,direction,fieldCallback,directionCallback}) => {
    
    function getDirectionIcon(mapField:string) {
        if (mapField == field) {
            return direction == sort_direction.ASC ? "↓" : "↑"
        }
        return "↓";
    }
    
    function updateFilter(mapField:string) {
        if (mapField == field) {
            if (direction == sort_direction.ASC) 
                directionCallback(sort_direction.DESC)
            else 
                directionCallback(sort_direction.ASC)
        } else {
            directionCallback(sort_direction.ASC)
            fieldCallback(FileTypes_sort_field[mapField.toUpperCase() as keyof typeof FileTypes_sort_field])
        }
    }

    return (
        <div className='filters'>
            {sortField.map((mapField)=>{
                return (
                    <div 
                    key={mapField.value}
                        onClick={() => updateFilter(mapField.value)}
                        className={"field " + (mapField.value == field? "active" : "")
                    }>
                        {mapField.text} {getDirectionIcon(mapField.value) }
                    </div>
                )
            })}
        </div>
    );
};

export default React.memo(Filters);