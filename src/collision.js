function ColVector(x, y){
	this.x = x;
	this.y = y;
	
	this.dotProduct = function(other){
		return this.x * other.x + this.y * other.y;	
	};
	
	this.magnitude = function(){
		return Math.sqrt(this.x * this.x + this.y * this.y);
	};
	
	this.normalize = function(){
		var mag = this.magnitude();
		this.x = this.x / mag;
		this.y = this.y / mag;
	};
}

function Polygon(){
	this.edges = new Array();
	this.points = new Array();
	
	this.buildEdges = function(){
		var p1 = new ColVector(0, 0);
		var p2 = new ColVector(0, 0);
		this.edges.splice(0, this.edges.length);
		
		var i;
		for(i = 0; i < this.points.length; i++){
			p1 = this.points[i];
			if(i + 1 >= this.points.length){
				p2 = this.points[0];
			}else{
				p2 = this.points[i + 1];
			}
			this.edges.push(new ColVector(p1.x - p2.x, p1.y - p2.y));
		}
	};
	
	this.getCenter = function(){
		var totalx = 0;
		var totaly = 0;
		var i;
		for(i = 0; i < this.points.length; i++){
			totalx += this.points[i].x;
			totaly += this.points[i].y;
		}
		
		return new ColVector(totalx / this.points.length, totaly / this.points.length);
	};
	
}

function ColDistance(min, max){
	this.min = min;
	this.max = max;
}

var Collision = {
	sub : function(a, b){
		return new ColVector(a.x - b.x, a.y - b.y);
	},
	add : function(a, b){
		return new ColVector(a.x + b.x, a.y + b.y);
	},
	mul : function(a, b){
		return new ColVector(a.x * b.x, a.y * b.y);
	},
	
	getPolygonCollision : function(pa, pb){
		var edgeCountA = pa.edges.length;
		var edgeCountB = pb.edges.length;
		var edge = new ColVector(0, 0);
		
		var edgeIndex;
		for(edgeIndex = 0; edgeIndex < (edgeCountA + edgeCountB); edgeIndex++){
			if(edgeIndex < edgeCountA){
				edge = pa.edges[edgeIndex];
			}else{
				edge = pb.edges[edgeIndex - edgeCountA];
			}
			
			var axis = new ColVector(-edge.y, edge.x);
			axis.normalize();
			var minA = 0;
			var minB = 0;
			var maxA = 0;
			var maxB = 0;
			var a = this.projectPolygon(axis, pa);
			var b = this.projectPolygon(axis, pb);
			minA = a.min;
			minB = b.min;
			maxA = a.max;
			maxB = b.max;
			if(this.intervalDistance(minA, maxA, minB, maxB) > 0){
				return false;
			}
		}
		return true;
	},
	
	intervalDistance : function(minA, maxA, minB, maxB){
		if(minA < minB){
			return minB - maxA;
		}else{
			return minA - maxB;
		}
	},
	
	projectPolygon : function(axis, polygon){
		var d = axis.dotProduct(polygon.points[0]);
		var min = d;
		var max = d;
		var i;
		for(i = 0; i < polygon.points.length; i++){
			d = polygon.points[i].dotProduct(axis);
			if(d < min){
				min = d;
			}else if(d > max){
				max = d;
			}
		}
		return new ColDistance(min, max);
	},
	
	checkCollision : function(node1, node2, node1Size){
		var s = node1Size;
		var pnt = node1.getAnchorPoint();
		var p1 = cc.p(node1.getPosition().x - s.width * pnt.x, node1.getPosition().y + s.height * (1 - pnt.y));
    	var p2 = cc.p(node1.getPosition().x + s.width * (1 - pnt.x), node1.getPosition().y + s.height * (1 - pnt.y));
    	var p3 = cc.p(node1.getPosition().x + s.width * (1 - pnt.x), node1.getPosition().y - s.height * pnt.y);
    	var p4 = cc.p(node1.getPosition().x - s.width * pnt.x, node1.getPosition().y - s.height * pnt.y);
    
    	p1 = this.rotateByAngle(p1, node1.getPosition(), node1.getRotation());
    	p2 = this.rotateByAngle(p2, node1.getPosition(), node1.getRotation());
    	p3 = this.rotateByAngle(p3, node1.getPosition(), node1.getRotation());
    	p4 = this.rotateByAngle(p4, node1.getPosition(), node1.getRotation());
    
    	var a = new Polygon();
    	a.points.push(new ColVector(p1.x, p1.y));
    	a.points.push(new ColVector(p2.x, p2.y));
    	a.points.push(new ColVector(p3.x, p3.y));
    	a.points.push(new ColVector(p4.x, p4.y));
    	a.buildEdges();
    
    	s = node2.getContentSize();
    	pnt = node2.getAnchorPoint();

    	p1 = cc.p(node2.getPosition().x - s.width * pnt.x, node2.getPosition().y + s.height * (1 - pnt.y));
    	p2 = cc.p(node2.getPosition().x + s.width * (1 - pnt.x), node2.getPosition().y + s.height * (1 - pnt.y));
    	p3 = cc.p(node2.getPosition().x + s.width * (1 - pnt.x), node2.getPosition().y - s.height * pnt.y);
    	p4 = cc.p(node2.getPosition().x - s.width * pnt.x, node2.getPosition().y - s.height * pnt.y);
    
    	p1 = this.rotateByAngle(p1, node2.getPosition(), node2.getRotation());
    	p2 = this.rotateByAngle(p2, node2.getPosition(), node2.getRotation());
    	p3 = this.rotateByAngle(p3, node2.getPosition(), node2.getRotation());
    	p4 = this.rotateByAngle(p4, node2.getPosition(), node2.getRotation());
    
    	var b = new Polygon();
    	b.points.push(new ColVector(p1.x, p1.y));
    	b.points.push(new ColVector(p2.x, p2.y));
    	b.points.push(new ColVector(p3.x, p3.y));
    	b.points.push(new ColVector(p4.x, p4.y));
    	b.buildEdges();

    	var r = this.getPolygonCollision(a, b);
    	return r;
	},
	
	checkCollisionFish : function(node1, node2, fishSize){
		var s = fishSize;
		var pnt = node1.getAnchorPoint();
		var p1 = cc.p(node1.getPosition().x, node1.getPosition().y + s.height * (1 - pnt.y));
    	var p2 = cc.p(node1.getPosition().x + s.width, node1.getPosition().y + s.height * (1 - pnt.y));
    	var p3 = cc.p(node1.getPosition().x + s.width, node1.getPosition().y - s.height * pnt.y);
    	var p4 = cc.p(node1.getPosition().x, node1.getPosition().y - s.height * pnt.y);
    
    	p1 = this.rotateByAngle(p1, node1.getPosition(), node1.getRotation());
    	p2 = this.rotateByAngle(p2, node1.getPosition(), node1.getRotation());
    	p3 = this.rotateByAngle(p3, node1.getPosition(), node1.getRotation());
    	p4 = this.rotateByAngle(p4, node1.getPosition(), node1.getRotation());
    
    	var a = new Polygon();
    	a.points.push(new ColVector(p1.x, p1.y));
    	a.points.push(new ColVector(p2.x, p2.y));
    	a.points.push(new ColVector(p3.x, p3.y));
    	a.points.push(new ColVector(p4.x, p4.y));
    	a.buildEdges();
    
    	s = node2.getContentSize();
    	pnt = node2.getAnchorPoint();

    	p1 = cc.p(node2.getPosition().x - s.width * pnt.x, node2.getPosition().y + s.height * (1 - pnt.y));
    	p2 = cc.p(node2.getPosition().x + s.width * (1 - pnt.x), node2.getPosition().y + s.height * (1 - pnt.y));
    	p3 = cc.p(node2.getPosition().x + s.width * (1 - pnt.x), node2.getPosition().y - s.height * pnt.y);
    	p4 = cc.p(node2.getPosition().x - s.width * pnt.x, node2.getPosition().y - s.height * pnt.y);
    
    	p1 = this.rotateByAngle(p1, node2.getPosition(), node2.getRotation());
    	p2 = this.rotateByAngle(p2, node2.getPosition(), node2.getRotation());
    	p3 = this.rotateByAngle(p3, node2.getPosition(), node2.getRotation());
    	p4 = this.rotateByAngle(p4, node2.getPosition(), node2.getRotation());
    
    	var b = new Polygon();
    	b.points.push(new ColVector(p1.x, p1.y));
    	b.points.push(new ColVector(p2.x, p2.y));
    	b.points.push(new ColVector(p3.x, p3.y));
    	b.points.push(new ColVector(p4.x, p4.y));
    	b.buildEdges();

    	var r = this.getPolygonCollision(a, b);

		// if(r){
		// 	var label = cc.labelTTF("R", "Arial", 20);
		// 	nod1.addChild(label);
		// 	label.color = cc.color(255, 0, 0);
		// 	label.setPosition(cc.p(0, 0));
		// }
    	return r;
	},
	
	// checkCollisionLaser : function(fish, node2){
		
	// },
	
	rotateByAngle : function(source, center, r){
		var st = (source.x - center.x) * (source.x - center.x) + (source.y - center.y) * (source.y  - center.y);
    	var s = Math.sqrt(st);
    	var a = GameTool.getRotate(center.x, center.y, source.x, source.y);
    	return cc.pAdd(center, cc.p(s * Math.cos(GameTool.degrees2radians(a - r)), s * Math.sin(GameTool.degrees2radians(a - r))));
	},
};