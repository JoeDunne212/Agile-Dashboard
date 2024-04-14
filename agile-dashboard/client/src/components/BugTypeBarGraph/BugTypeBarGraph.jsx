import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BugTypeBarGraph = ({ data }) => {
  const d3Container = useRef(null);

  const issues = data.master_board.issues;
  const issueTypeCounterMap = {};
  
  issues.forEach(element => {
    let type = element.fields.issuetype.name;
    console.log(type);
    issueTypeCounterMap[type] = (issueTypeCounterMap[type] || 0) + 1;
  });
  

  const graphData = Object.keys(issueTypeCounterMap).map(key => ({
    type: key,
    count: issueTypeCounterMap[key]
  }));

  data = graphData;
  useEffect(() => {
    if (data && d3Container.current) {
      // Clear the container each time the data changes
      d3.select(d3Container.current).selectAll("*").remove();

      const margin = { top: 20, right: 30, bottom: 40, left: 90 };
      const width = 460 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;

      // Append the svg object to the container
      const svg = d3.select(d3Container.current)
                    .append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", `translate(${margin.left},${margin.top})`);

      // X axis
      const x = d3.scaleLinear()
                  .domain([0, d3.max(graphData, d => d.count)])
                  .range([0, width]);
      svg.append("g")
         .attr("transform", `translate(0,${height})`)
         .call(d3.axisBottom(x))
         .selectAll("text")
         .style("text-anchor", "end");

      // Y axis
      const y = d3.scaleBand()
                  .range([0, height])
                  .domain(data.map(d => d.type))
                  .padding(.1);
      svg.append("g")
         .call(d3.axisLeft(y))

      // Bars
      svg.selectAll("myRect")
         .data(data)
         .enter()
         .append("rect")
         .attr("x", x(0))
         .attr("y", d => y(d.type))
         .attr("width", d => x(d.count))
         .attr("height", y.bandwidth())
         .attr("fill", "#69b3a2")
    }
  }, [graphData]); // Redraw chart if data changes

  return (
    <div className='m-10 flex flex-col justify-items-start'>
      <h2>Issue by Type</h2>
      <div ref={d3Container} />
    </div>
  );
};

export default BugTypeBarGraph;
