import React from 'react'


export default function FilterBy(props) {

    function handleSelect(e) {
        props.projectTypeFilter(e.target.value)
    }

    return (
            <select name="language" className="filter-projects" onChange={handleSelect}>
                <option value="clear" selected="selected">Filter by Skill</option>
                <option value="javascript">Javascript</option>
                <option value="ruby">Ruby</option>
                <option value="swift">Swift</option>
                <option value="rust">Rust</option>
                <option value="ruby on rails">Ruby on Rails</option>
                <option value="vue">Vue</option>
                <option value="react">React</option>
                <option value="react native">React Native</option>
                <option value="c++">C++</option>
                <option value="c#">C#</option>
                <option value="unity 3d">Unity 3D</option>
                <option value="tech">Tech</option>
            </select>
    )
}
