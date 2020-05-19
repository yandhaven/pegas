import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";
import modules from './Nav.module.css'
import avatar from './images/avatar.jpg'

function SidebarItem({ depthStep = 10, depth = 0, expanded, item, ...rest }) {
  const [collapsed, setCollapsed] = React.useState(true);
  const { label, items, Icon, onClick: onClickProp } = item;

  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue);
  }

  function onClick(e) {
    if (Array.isArray(items)) {
      toggleCollapse();
    }
    if (onClickProp) {
      onClickProp(e, item);
    }
  }

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? (
      <ExpandLessIcon
        className={
          modules.sidebarItemExpandArrowExpanded
        }
      />
    ) : (
        <ExpandMoreIcon className={modules.sidebarItemExpandArrow} />
      );
  }

  return (
    <div>

      

      <>

        <ListItem
          className={modules.sidebarItem}
          onClick={onClick}
          button
          dense
          {...rest}
        >
          <div
            style={{ paddingLeft: depth * depthStep }}
            className={modules.sidebarItemContent}
          >
            {Icon && <Icon className={modules.sidebarItemIcon} fontSize="small" />}
            <div className={modules.sidebarItemText}>{label}</div>
          </div>
          {expandIcon}
        </ListItem>
        <Collapse in={!collapsed} timeout="auto" unmountOnExit>
          {Array.isArray(items) ? (
            <List disablePadding dense>
              {items.map((subItem, index) => (
                <React.Fragment key={`${subItem.name}${index}`}>
                  {subItem === "divider" ? (
                    <Divider style={{ margin: 6 + "px" + 0 }} />
                  ) : (
                      <SidebarItem
                        depth={depth + 1}
                        depthStep={depthStep}
                        item={subItem}
                      />
                    )}
                </React.Fragment>
              ))}
            </List>
          ) : null}
        </Collapse>
      </>

    </div>

  );
}

function Sidebar({ items, depthStep, depth, expanded }) {
  return (
    
    <div className={modules.sidebar}>
      
      <div className={modules.navavatar}><img src={avatar} class="rounded-circle border border-success justify-content-center" style={{maxWidth: 140 +'px'}}></img> Оксана Шевченко </div><br/>
      

      <List disablePadding dense>
        {items.map((sidebarItem, index) => (
          <React.Fragment key={`${sidebarItem.name}${index}`}>
            {sidebarItem === "divider" ? (
              <Divider style={{ margin: 6 + "px" + 0 }} />
            ) : (
                <SidebarItem
                  depthStep={depthStep}
                  depth={depth}
                  expanded={expanded}
                  item={sidebarItem}
                />
              )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default Sidebar;