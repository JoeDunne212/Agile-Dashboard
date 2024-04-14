import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const JiraDataGraph = ({ data }) => {
  const d3Container = useRef(null);

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
                  .domain([0, d3.max(data, d => d.value)])
                  .range([0, width]);
      svg.append("g")
         .attr("transform", `translate(0,${height})`)
         .call(d3.axisBottom(x))
         .selectAll("text")
         .style("text-anchor", "end");

      // Y axis
      const y = d3.scaleBand()
                  .range([0, height])
                  .domain(data.map(d => d.group))
                  .padding(.1);
      svg.append("g")
         .call(d3.axisLeft(y))

      // Bars
      svg.selectAll("myRect")
         .data(data)
         .enter()
         .append("rect")
         .attr("x", x(0))
         .attr("y", d => y(d.group))
         .attr("width", d => x(d.value))
         .attr("height", y.bandwidth())
         .attr("fill", "#69b3a2")
    }
  }, [data]); // Redraw chart if data changes

  return (
    <div>
      <h2>JIRA Data Graph</h2>
      <div ref={d3Container} />
    </div>
  );
};

export default JiraDataGraph;
